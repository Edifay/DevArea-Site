import requests


class ChallengeException(Exception):
    pass


class InvalidToken(ChallengeException):
    pass


def constructData(data):
    return {"data": str(data), "toShow": ""}


def printResponse(val):
    val = val.replace("\n", "\n<< ")
    print(f"<< {val}")


def printSubmitted(val):
    print(f">> {val}")


class Client:
    def __init__(self, token, url="https://devarea.fr/data/challenges"):
        self.token = token
        self.url = url
        self.sessionId = self.createSession()

    def createSession(self):
        r = requests.get(f"{self.url}/create_session?key={self.token}&lang=PYTHON")
        if r.status_code == 500:
            raise InvalidToken()
        return r.json()["data"]

    def getChallengeAccomplished(self):
        r = requests.get(f"{self.url}/challenges_accomplished?key={self.token}")
        return r.json()

    def start(self):
        printSubmitted("start")
        return self.executeOnChallenge("start")

    def loadChallenge(self, challenge):
        printSubmitted("load " + challenge)
        r = requests.get(f"{self.url}/load_challenge?sessionId={self.sessionId}&challenge={challenge}")
        toShow = r.json()["toShow"]
        printResponse(toShow)
        return None

    def submit(self, data):
        printSubmitted(data)
        return self.executeOnChallenge("", constructData(data))

    def executeOnChallenge(self, command, body=None):
        if body is None:
            body = {"data": "", "toShow": ""}
        r = requests.post(f"{self.url}/execute_on_challenge/{command}?sessionId={self.sessionId}", json=body).json()
        printResponse(r["toShow"])
        return r["data"]
