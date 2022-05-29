import random
import json
characters = []

with open('characters.json') as json_file:
    characters = json.load(json_file)
