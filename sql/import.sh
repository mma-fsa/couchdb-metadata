#!/bin/bash
mysql -uroot -p'nail!goat' --column-names=TRUE < make_model.sql > make_model.csv
couchutil_import http://localhost:5984/metadata_staging make_model < make_model.csv
mysql -uroot -p'nail!goat' --column-names=TRUE < car_engine.sql > car_engine.csv
couchutil_import http://localhost:5984/metadata_staging car_engine < car_engine.csv
rm -f *.csv

