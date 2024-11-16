# Mocker

**Mocker** is a developer-friendly CLI tool for generating mock data in JSON format. It allows you to set up an initial template folder, customize mock data, and generate JSON files based on your template.

## Features

- **Template Initialization**: Create a `mock-template` folder with predefined structure for easy customization.
- **Mock Data Generation**: Create a `mock-data` and generate JSON mocked data files based on your custom templates.
- **Developer-Friendly**: Designed for use as a development dependency.

## Installation

Install Mocker as a development dependency in your project:

```bash
npm install @husam287/mocker --save-dev
```

## Usage

### 1. Initialize the Mock Template

To set up an initial mock-template folder, use the following command:

```bash
npx mocker init
```

This command creates a mock-template folder in your current working directory. Inside, you can define your mock data templates in JSON files.

### 2. Customize Your Templates

Edit the files inside the mock-template folder to define your mock data. Each file should export a JavaScript or TypeScript object.

**Example Template: user.mock.json**

```json
{
  "type": "list",
  "count": 10,
  "payload": [
    {
      "name": "username",
      "type": "text"
    }
  ]
}
```

> This will create a list of 10 users each user is an object has username (text)

### 3. Generate Mock Data

Once your templates are ready, generate the mock data JSON files with:

```bash
npx mocker g
```

> This command processes all .mock.json files in the mock-template folder and creates corresponding JSON files in the mock-data folder in `src` if exists otherwise on current directory

## Folder Structure

```
your-project/
├── mock-template/
│   ├── user.mock.json
├── mock-data/ (generated after `npx mocker g`)
```

## CLI Commands

- npx mocker init
  Initializes the mock-template folder with example files.

- npx mocker g
  Generates JSON files from the mock templates in the mock-template folder.

## Mock Template JSON Types

| Prop    | Info                                   |
| ------- | -------------------------------------- |
| type    | type of generated value                |
| name    | name of the key of the generated value |
| payload | list which has object of name & type   |
| count   | number of object generated             |

## Complex Nested Template JSON Example

```js
{
  // whole list of 10 entries
  "type": "list",
  "count": 10,
  "payload": [
    // Username field
    // will generate => username: "Hossam Sherif"
    {
      "name": "username",
      "type": "text"
    },
    // Address Object field
    // will generate => address: { street_number:21, street_name: "st 123" }
    {
      "name": "address",
      "type": "object",
      "payload": [
        {
          "name": "street_number",
          "type": "number"
        },
        {
          "name": "street_name",
          "type": "text"
        }
      ]
    },
    // posts list with 3 entries
    // will generate => [{id:1, title:"test"}, ....]
    {
      "name": "posts",
      "type": "list",
      "count": 3,
      "payload": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "title",
          "type": "text"
        }
      ]
    },
  ]
}
```

## Single Object Template JSON Example

```js
{
  // This generate single object
  // will generate => {title: "Hi there", description: "test random text"}
  "type": "object",
  "payload": [
    {
      "name": "title",
      "type": "text"
    },
    {
      "name": "description",
      "type": "text"
    }
  ]
}
```

## Types Enum

| type        | Info                                        |
| ----------- | ------------------------------------------- |
| list        | array                                       |
| object      | object                                      |
| text        | random text                                 |
| number      | random number                               |
| date        | random date                                 |
| birthday    | random birthday between 18 years old and 80 |
| user_avatar | random user avatar                          |
| phone       | random phone number                         |
