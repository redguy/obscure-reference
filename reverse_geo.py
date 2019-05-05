import geocoder
import json
from random import randrange, choice
import time


with open('datasets/balanced.json', 'r') as f:
    places = json.load(f)

enriched = []
for place in places:
    time.sleep(1)
    lon = place['lon'] if place['lon'] else 14.416602+float(randrange(10))/100
    lat = place['lat'] if place['lat'] else 50.072719+float(randrange(10))/100

    g = geocoder.osm([lat, lon], method='reverse')

    add = str(g).split(",")
    address = ','.join(add[1:-6])
    sentiment = ["GREEN", "CALM", "JOYFUL"]
    if address:
        print(address, bool(address))
        newplace = place
        newplace['title'] = address
        newplace['experiences'] = choice(sentiment)
        newplace['position'] = {
            'latitude': lat,
            'longitude': lon
        }
        newplace['walkDuration'] = randrange(50)
        newplace['length'] = randrange(5)
        newplace['duration'] = randrange(50)
        enriched.append(newplace)

with open('balanced-enriched.json', 'w', encoding='utf-8') as f:
    json.dump(enriched, f, ensure_ascii=False)