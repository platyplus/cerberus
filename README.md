# Cerberus

## TODO

- [ ] Metadata for lab and prevention
- [x] Filter only excel files to be watched by chokidar
- [ ] Split Property class to an abstract class + inherited classes e.g. OneToManyProperty etc
- [x] TbKeySample is not mapped correctly (different way to name repeated fields)
- [x] small caps in columns before snake case
- [x] Custom propery names, but with same excel column names. e.g. MdM Code
- [ ] Log/output all lines that couldn't be imported
- [ ] Import files from different locations e.g. YPO etc
- [ ] Complete the README
- [ ] (big) Link the excel files together with PKs/FKs
- [ ] (big) reuse concepts accross tables, e.g. medication
- [ ] (big) link visit types together
- [ ] adherence: multiple fields for several drugs, de-embedd them to a generic drug_usage table
- [x] yes/no -> boolean
- [ ] database column and table comments

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
