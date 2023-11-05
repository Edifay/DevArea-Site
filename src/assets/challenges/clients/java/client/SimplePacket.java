package devarea.client;

import java.util.HashMap;
import java.util.Map;

public class SimplePacket {

    protected String data;
    protected String toShow;

    public SimplePacket(final String data) {
        this.data = data;
        this.toShow = "";
    }

    public SimplePacket(final String data, final String toShow) {
        this.data = data;
        this.toShow = toShow;
    }

    public String getData() {
        return data;
    }

    public String getToShow() {
        return toShow;
    }

    public String toJson() {
        return "{\"data\":\"" + this.data + "\",\"toShow\":\"" + toShow + "\"}";
    }

    public static SimplePacket parseString(final String json) {
        Map<String, String> maps = convertStringToMap(json);
        return new SimplePacket(maps.get("data"), maps.get("toShow"));
    }

    public static Map<String, String> convertStringToMap(String data) {
        HashMap<String, String> map = new HashMap<>();
        String[] splitted = data.split("\"");

        map.put(splitted[1], splitted[3]);
        map.put(splitted[5], splitted[7]);

        return map;
    }

}
