# database.py
"""
MongoDB connection and helper functions for the e-commerce platform.
"""
from pymongo import MongoClient

# Update the URI as needed for your local MongoDB setup
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "themart_db"

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

# Example helper: get collection
def get_collection(name):
    return db[name]
