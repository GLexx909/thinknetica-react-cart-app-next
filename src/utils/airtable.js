import axios from "axios";
import {stringify} from "qs";
import * as _ from "lodash";

const API_TOKEN = ''

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

const fetchBook = (id) => {
  return (
    httpClient.get(`/Books/${id}`, {
      paramsSerializer: (params) => {
        return stringify(params, { arrayFormat: 'brackets' })
      }
    })
      .then(result => result.data)
      .then(_changeFromAirtable)
  )
}

const fetchData = () => {
  return (
    httpClient.get(`/Books`, {
      params: {
        maxRecords: 5,
        view: 'Grid view',
        sort: [{field: 'id', direction: 'asc'}]
      },
      paramsSerializer: (params) => {
        return stringify(params, { arrayFormat: 'brackets' })
      }
    })
      .then(result => result.data)
      .then(_mapFromAirtable)
  )
}

function _changeFromAirtable(record) {
  console.log(record)

  const _mapAuthors = (fields) => {
    return _.zip(
      fields["id (from Authors)"],
      fields["name (from Authors)"],
      fields["email (from Authors)"],
      fields["avatar (from Authors)"],
      fields["description (from Authors)"]
    ).map(record => _.zipObject(
      ['id', 'name', 'email', 'avatar', 'description'],
      record
    ))
  }

  return  ({
      idAir: record.id,
      id: record.fields.id,
      title: record.fields.title || null,
      description: record.fields.description || null,
      pages_count: record.fields.pages_count || null,
      language: record.fields.language || null,
      progress: record.fields.progress || null,
      cover: record.fields.cover || null,
      min_price: record.fields.min_price || null,
      desired_price: record.fields.desired_price || null,
      current_sum: record.fields.current_sum || null,
      expected_sum: record.fields.expected_sum || null,
      subscribers_count: record.fields.subscribers_count || null,
      authors: _mapAuthors(record.fields)
  })
}

function _mapFromAirtable(data) {
  const _mapAuthors = (fields) => {

    return _.zip(
      fields["id (from Authors)"],
      fields["name (from Authors)"],
      fields["email (from Authors)"],
      fields["avatar (from Authors)"],
      fields["description (from Authors)"]
    ).map(record => _.zipObject(
      ['id', 'name', 'email', 'avatar', 'description'],
      record
    ))
  }

  return data.records.map(
    record => ({
      idAir: record.id,
      id: record.fields.id,
      title: record.fields.title,
      description: record.fields.description,
      pages_count: record.fields.pages_count,
      language: record.fields.language,
      progress: record.fields.progress,
      cover: record.fields.cover,
      min_price: record.fields.min_price,
      desired_price: record.fields.desired_price,
      current_sum: record.fields.current_sum,
      expected_sum: record.fields.expected_sum,
      subscribers_count: record.fields.subscribers_count,
      authors: _mapAuthors(record.fields)
    })
  )
}

export {
  fetchData,
  fetchBook
}
