import json
import csv
import sys

csvFile = sys.argv[1]

data = {}

with open(csvFile, 'r') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        company = row[0]
        
        if len(row[1]) == 0 or len(row[2]) == 0:
            continue

        splitIntern = row[1].split('(JOBHERE)')       
        intern1 = splitIntern[0]
        intern2 = splitIntern[1]
        
        splitFulltime = row[2].split('(JOBHERE)')
        ft1 = splitFulltime[0]
        ft2 = splitFulltime[1]

        data[company] = {
            'intern': [intern1, intern2],
            'fulltime': [ft1, ft2],
            'type': row[3].lower()
        }

with open('jobs.json', 'w') as f:
    json.dump(data, f, indent=4)