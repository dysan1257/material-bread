import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Appbar } from '../../../../src/index';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#263238',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 6,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, description, type, defaultValue) {
  id += 1;
  return { id, name, description, type, defaultValue };
}

const rows = [
  createData(
    'backgroundColor',
    'styles root backgroundColor',
    'string',
    'Theme.primaryColor',
  ),
  createData('position', 'adds position as expected', 'string', 'fixed'),
  createData('style', 'styles the root component', 'object', ''),
];

class AppbarPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Scrollspy
          items={['component', 'usage', 'props', 'demos', 'with-search']}
          currentClassName="is-current"
          style={{ position: 'fixed', right: 50 }}
          className="SideMenu">
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#component">
              Component
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#usage">
              Usage
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#props">
              Props
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#demos">
              Demos
            </a>
          </li>
          <li className="SideMenu__ListItem SideMenu__ListItem--sub">
            <a className="SideMenu__Link " href="#with-search">
              with search
            </a>
          </li>
        </Scrollspy>
        <h1 style={{ fontSize: 42, letterSpacing: 1.2, marginBottom: 0 }}>
          Appbar top
        </h1>

        <p style={{ color: 'rgba(0, 0, 0, 0.57)', marginTop: 16 }}>
          The top app bar displays information and actions relating to the
          current screen.{' - '}
          <a
            href="https://material.io/design/components/app-bars-top.html#"
            style={{ textDecoration: 'none' }}>
            Material Docs
          </a>
        </p>

        <div className="row " style={{ marginTop: 0 }}>
          <pre
            style={{
              padding: 12,
              borderRadius: 6,
              position: 'relative',
              paddingRight: 44,
              boxShadow:
                '0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
            }}>
            <code
              className="language-javascript"
              style={{
                fontSize: 14,
              }}>{`import { Appbar } from 'material-bread'`}</code>
            <button
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                fontSize: 11,
                border: 'none',
                outline: 'none',
                color: '#efefef',
                padding: 5,
                cursor: 'pointer',
                backgroundColor: '#1e6caf',
                borderBottomLeftRadius: 6,
              }}>
              Copy
            </button>
          </pre>
        </div>

        <div style={{ marginTop: 60 }} id="component">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Component</span>{' '}
            <a className="HashLink" href="/components/appbar#component">
              #
            </a>
          </h3>

          <LiveProvider
            code=" <Appbar title={'Page Title'} />"
            scope={{ Appbar }}
            mountStylesheet={false}
            style={{
              boxShadow:
                '0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
              borderRadius: 6,
              backgroundColor: '#2d2d2d',
            }}>
            <LivePreview
              style={{
                padding: 24,
                backgroundColor: 'white',
                borderTopRightRadius: 6,
                borderTopLeftRadius: 6,
              }}
            />
            <div
              style={{
                position: 'relative',
              }}>
              <Tooltip
                title="You can edit/add props, elements, or components. Errors will show below."
                placement={'top'}>
                <span
                  style={{
                    color: '#00a2b1',
                    position: 'absolute',
                    right: 0,
                    padding: 10,
                    marginRight: 8,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}>
                  Live Editing
                </span>
              </Tooltip>

              <LiveEditor
                className={'language-javascript'}
                style={{
                  margin: 0,
                  fontSize: 14,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  paddingTop: 20,
                  paddingBottom: 20,
                  outline: 'none',
                }}
              />
            </div>

            <LiveError
              style={{
                backgroundColor: '#ffebeb',
                color: '#EF5350',
                padding: 24,
                borderBottomLeftRadius: 6,
                borderBottomRightRadius: 6,
              }}
            />
          </LiveProvider>
        </div>
        <div style={{ marginTop: 60 }} id="usage">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Usage</span>{' '}
            <a className="HashLink" href="/components/appbar#usage">
              #
            </a>
          </h3>

          <div className="row " style={{}}>
            <pre
              style={{
                width: '100%',
                borderRadius: 6,
                boxShadow:
                  '0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
                position: 'relative',
              }}>
              <code
                className="language-jsx"
                style={{
                  fontSize: 14,
                }}>{`import react  from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>

    );
  }
}`}</code>
              <button
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  fontSize: 14,
                  border: 'none',
                  outline: 'none',
                  color: '#efefef',
                  padding: 8,
                  cursor: 'pointer',
                  backgroundColor: '#1e6caf',
                  borderBottomLeftRadius: 6,
                }}>
                Copy
              </button>
            </pre>
          </div>
        </div>
        <div style={{ marginTop: 60 }} id="Props">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Props</span>{' '}
            <a className="HashLink" href="/components/appbar#props">
              #
            </a>
          </h3>
          <Table className={classes.table}>
            <TableHead style={{ borderRadius: 6 }}>
              <TableRow>
                <CustomTableCell
                  style={{
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                  }}>
                  Name
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  Description
                </CustomTableCell>
                <CustomTableCell>Type</CustomTableCell>
                <CustomTableCell
                  align="right"
                  style={{
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  }}>
                  Default
                </CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell>{row.name}</CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {row.description}
                  </CustomTableCell>
                  <CustomTableCell>{row.type}</CustomTableCell>
                  <CustomTableCell align="right">
                    {row.defaultValue}
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div style={{ marginTop: 60 }} id="demos">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Demos</span>{' '}
            <a className="HashLink" href="/components/appbar#demos">
              #
            </a>
          </h3>
        </div>
        <div style={{ marginTop: 60 }} id="with-search">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Appbar with search</span>{' '}
            <a className="HashLink" href="/components/appbar#with-search">
              #
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AppbarPage);