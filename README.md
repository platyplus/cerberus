# Cerberus

## TODO

- [ ] metadata for lab and prevention
- [ ] Filter only excel files to be watched by chokidar
- [ ] Split Property class to an abstract class + inherited classes e.g. OneToManyProperty etc
- [ ] TbKeySample is not mapped correctly (different way to name repeated fields)
- [ ] custom propery names, but with same excel column names
- [ ] log/output all lines that couldn't be imported
- [ ] import files from different locations
- [ ] Write README.md

## Installation

### Requirements

Git, Docker Machine

### Clone the repository

```
git clone https://github.com/platyplus/cerberus
cd cerberus
```

### Modify the metadata

### Build and run

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build
```
