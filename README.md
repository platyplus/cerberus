# Sphinx Metadata normaliser and loader

<!-- ## TODO

- [ ] Metadata for lab
- [ ] Metadata for viral load and tracking
- [ ] Log/output all lines that couldn't be imported
- [ ] Import files from different field locations e.g. YPO etc
- [ ] Complete the README
- [ ] all 'multiple' fields have multiple columns (arrays) => single array columns
- [ ] abstract & inherited enums e.g. symptoms
- [ ] (big) Link the excel files together with PKs/FKs
- [ ] (big) reuse concepts accross tables, e.g. medication
- [ ] (big) link visit types together
- [ ] adherence: multiple fields for several drugs, de-embedd them to a generic drug_usage table
- [ ] database column and table comments
- [ ] migrations after generating new classes? (tricky as we need postgres to be running -> in the readme)
- [ ] simple enum column with options
- [ ] convert Row interface into a class, and add methods such as getGroups, and replace emptyRow() -->

## Installation

### Requirements

Git, Docker Machine

### Clone the repository

```
git clone https://github.com/platyplus/cerberus
cd cerberus
```

### How it works

The metadata Excel file is in the `./importer` folder. The first sheet have to contain the information about the several Sphinx databases. Sphinx metadata will be automatically analysed and normalised into TypeORM class files, that will be stored in the `./importer/entity` folder.

TypeORM will then automatically create a PostgreSQL database schema based on this normalised schema.

Once the Typescript classes and the SQL schema are built, the program will scan the Sphinx Excel exports in the `./data` directory and automatically import its data into the PosgreSQL database. Note that any change in an excel export file will trigger a re-import of the file.

Once all the data is loaded, you can use Metabase to start analysing the data.

### Statistics

You may want to compare how many tables and columns are created in the transformation process, compared to the initial Sphinx metadata. You can run the NPM command `npm run stats` to get the numerator.

### Start in development mode

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
```

#### Start in production mode

```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build
```

<!-- - [x] default values
- [x] Metadata for prevention
- [x] Filter only excel files to be watched by chokidar
- [x] Split Property class to an abstract class + inherited classes e.g. OneToManyProperty etc
- [x] TbKeySample is not mapped correctly (different way to name repeated fields)
- [x] small caps in columns before snake case
- [x] Custom propery names, but with same excel column names. e.g. MdM Code
- [x] split the "relation" metadata column into "relation type" and "relation name" so we can use two times the same relation type in the same entity
- [x] yes/no -> boolean
- [x] structure DIC data in a better way
- [x] group enums -->
