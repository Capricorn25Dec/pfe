from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase


class DatabaseManager:
    def __init__(self, uri: str, db_name: str):
        self.client = AsyncIOMotorClient(uri)
        self.db_name = db_name

    def get_database(self) -> AsyncIOMotorDatabase:
        return self.client[self.db_name]


# Example usage
database_manager = DatabaseManager("mongodb://localhost:27017", "monitoring_notes")


def get_database() -> AsyncIOMotorDatabase:
    return database_manager.get_database()
