# from app.repositry import Repository
# from app import MongoRepository
# from .schema import KudoSchema



class Service(object):
    def __init__(self, user_id, repo_client=Repositry(adapter=MongoRepositry)):
        self.repo_client = repo_client
        self.user_id = user_id

        if not user_id:
                raise Exception('User id nor provided')





