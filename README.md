# Cerberus

## TODO

- [ ] Metadata for lab and prevention
- [ ] Filter only excel files to be watched by chokidar
- [ ] Split Property class to an abstract class + inherited classes e.g. OneToManyProperty etc
- [ ] TbKeySample is not mapped correctly (different way to name repeated fields)
- [ ] Custom propery names, but with same excel column names
- [ ] Log/output all lines that couldn't be imported
- [ ] Import files from different locations
- [ ] Complete the README
- [ ] (big) Link the excel files together with PKs/FKs

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

#### Develpment

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
```

#### Production

```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build
```
