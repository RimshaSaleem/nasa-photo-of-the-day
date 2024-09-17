import React from 'react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react';
import styled from 'styled-components';
const Titles = `black`;
const Titless = styled.h3`
color: ${props => (props.Titles ? Titles:"purple")};
text-align:center;
`

const DividerExampleHorizontalTable = () => (
  <>
    <Divider horizontal>
      <Header as='h3'>
        <Icon name='tag' />
        Descriptions Of Image 
      </Header>
    </Divider>

    <Titless>
    This Picture ,Date and Description is taken from Nasa Apod API.

    </Titless>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Size</Table.Cell>
          <Table.Cell>1" x 2"</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>API</Table.Cell>
          <Table.Cell>Nasa Apod API</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Color</Table.Cell>
          <Table.Cell>Pinkish</Table.Cell>
        </Table.Row>
        
      </Table.Body>
    </Table>
  </>
  
)

export default DividerExampleHorizontalTable