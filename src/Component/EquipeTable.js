import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Backdrop, IconButton, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { getDatabase, ref, remove } from 'firebase/database';
import firebaseApp from '../functions/firebase';

const database = getDatabase(firebaseApp);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function EquipeTable({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')

  return <>
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom </StyledTableCell>
            <StyledTableCell align="right">Function</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.nom}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.titre}
              </StyledTableCell>
              <StyledTableCell align="right">
                <img src={row.image} style={{ height: '50px' }} alt={row.nom} onClick={e => {
                  setUrl(row.image)
                  setOpen(true)
                }} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton color='secondary' onClick={e => {
                  remove(ref(database, '/team/' + row.id)).then(data => {
                    console.log(data)
                  })
                }}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={e => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <img alt='modal view' src={url} style={{height:'95vh'}}/>
    </Modal>
  </>
}
