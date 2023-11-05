package devarea;

import devarea.client.Client;

import java.io.IOException;

/**
 * Lancez ce programme !
 */
public class Tutoriel {

    public static void main(String[] args) throws IOException {
        Client client = new Client("/challenges sur Dev'Area pour obtenir ta key", "http://localhost:8192/");

        client.loadChallenge("tutoriel");
        client.start();

        /*client.submit();*/
    }

}
