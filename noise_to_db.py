import geopandas
import pyodbc
import json

import config


'''
CREATE TABLE obscure.dbo.
(
    ulx FLOAT,
    uly FLOAT,
    brx FLOAT,
    bry FLOAT,
    id INTEGER IDENTITY,
    polyjson TEXT DEFAULT NULL 
)
CREATE INDEX _layer_ulx_uly_brx_bry_index ON obscure.dbo.polygons (layer, ulx, uly, brx, bry)
pyodbc
'''

def connect_db():
    conn = pyodbc.connect(config.db_connection_string)
    cursor = conn.cursor()
    return cursor, conn


cursor, conn = connect_db()

file_name = "gml/HM_Ekola_ADP_pasma_den_p.gml"

noise = geopandas.read_file(file_name, layer=0)

i = 0
for index, row in noise.iterrows():
    polygon = json.loads(geopandas.GeoSeries(row['geometry']).to_json())
    polygon['value'] = (row['DB_LO'] + row['DB_HI']) / 2

    sql_params = [
        'silent',  # layer
        row['geometry'].bounds[0],
        row['geometry'].bounds[1],
        row['geometry'].bounds[2],
        row['geometry'].bounds[3],
        json.dumps(polygon),
        polygon['value']
    ]
    if polygon['value'] <= 50:
        cursor.execute("insert into polygons (layer, lb_lng, lb_lat, rt_lng, rt_lat, polyjson, noise) values (?, ?, ?, ?, ?, ?, ?)",
                   sql_params)
        print(sql_params)

    i+=1
    if i%1000 == 0:
        conn.commit()
        print(f"Commited {i}")


conn.commit()