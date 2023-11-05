package devarea.client;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class RequestBuilder {

    protected String requestType;
    protected String path;
    protected HashMap<String, String> params = new HashMap<>();

    protected String contentType;
    protected SimplePacket packet;


    public RequestBuilder(final String requestType, final String path) {
        this.requestType = requestType;
        this.path = path;
    }

    public RequestBuilder addParam(final String name, final String value) {
        this.params.put(name, value);
        return this;
    }

    public RequestBuilder setBody(final String contentType, final SimplePacket packet) {
        this.contentType = contentType;
        this.packet = packet;
        return this;
    }

    public SimplePacket build() throws IOException {
        URL url = new URL(this.path + this.getParams());

        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod(requestType);

        if (this.contentType != null) {
            con.setRequestProperty("Content-Type", contentType);

            con.setDoOutput(true);
            DataOutputStream out = new DataOutputStream(con.getOutputStream());
            out.writeBytes(this.packet.toJson());
            out.flush();
            out.close();
        }


        int status = con.getResponseCode();
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer result = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            result.append(inputLine);
        }
        in.close();
        con.disconnect();

        if (status != 200)
            throw new IOException("Request error !");

        return SimplePacket.parseString(result.toString());
    }


    private String getParams() {
        if (this.params.isEmpty())
            return "";

        StringBuilder builder = new StringBuilder("?");
        boolean first = true;
        for (Map.Entry<String, String> entry : params.entrySet()) {
            if (!first)
                builder.append("&");
            else
                first = false;

            builder
                .append(entry.getKey())
                .append("=")
                .append(entry.getValue());
        }

        return builder.toString();
    }
}