package devarea.client;

import java.io.IOException;

public class Client {

    private final String domain;
    protected final int sessionId;

    public Client(final String clientKey) throws IOException {
        this(clientKey, "https://devarea.fr/data/challenges");
    }

    public Client(final String clientKey, final String domain) throws IOException {
        this.domain = domain;

        SimplePacket packetR =
            new RequestBuilder("GET", domain + "challenges/create_session")
                .addParam("key", clientKey)
                .addParam("lang", "JAVA")
                .build();

        sessionId = Integer.parseInt(packetR.getData());

        System.out.println("Client connected !");
        System.out.println("Pour plus d'information faites 'help' !\n");
    }


    public String loadChallenge(final String challenge) throws IOException {
        printWithPrefix(">>", "load " + challenge);

        SimplePacket packetR =
            new RequestBuilder("GET", domain + "challenges/load_challenge")
                .addParam("sessionId", String.valueOf(sessionId))
                .addParam("challenge", challenge)
                .build();

        printWithPrefix("<<", packetR.toShow);
        return packetR.data;
    }

    public String start() throws IOException {
        return this.submit("start", new SimplePacket("start"));
    }

    public String help() throws IOException {
        return this.submit("help", new SimplePacket(""));
    }

    public String submit(final String data) throws IOException {
        return submit("", new SimplePacket(data));
    }

    public String submit(final int data) throws IOException {
        return submit("", new SimplePacket(Integer.toString(data)));
    }

    protected String submit(final String action, final SimplePacket packet) throws IOException {
        printWithPrefix(">>", packet.getData());

        SimplePacket packetR =
            new RequestBuilder("POST", domain + "challenges/execute_on_challenge/" + action)
                .addParam("sessionId", String.valueOf(sessionId))
                .setBody("application/json", packet)
                .build();


        printWithPrefix("<<", packetR.getToShow());
        return packetR.data;
    }


    public static void printWithPrefix(final String prefix, final String content) {
        StringBuilder builder = new StringBuilder(" ").append(prefix).append(" ");
        int size = 0;
        for (int i = 0; i < content.length(); i++) {
            if (size > 85) {
                if (content.charAt(i) != ' ') {
                    if (i != 0 && content.charAt(i - 1) != ' ')
                        builder.append("-");
                    i--;
                }
                builder.append("\n ").append(prefix).append(" ");
                size = 1;
            } else if (i + 1 < content.length() && content.startsWith("\\n", i)) {
                builder.append("\n ").append(prefix).append(" ");
                size = 0;
                i++;
            } else {
                size++;
                builder.append(content.charAt(i));
            }
        }
        builder.append("\n");
        System.out.print(builder);
    }


}
