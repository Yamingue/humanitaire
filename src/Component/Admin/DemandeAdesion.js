import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { ref, remove, getDatabase } from 'firebase/database'
import firebaseApp from '../../functions/firebase';

const database = getDatabase(firebaseApp)


export default function DemandeAdesion({data}) {

  return (
    <TableContainer component={Paper} style={{marginTop:'10px'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell >Email ou téléphone</TableCell>
            <TableCell >Ville</TableCell>
            <TableCell >Commentaire</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow hover key={row.id}>
              <TableCell component="th" scope="row">
                {row.nom}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.ville}</TableCell>
              <TableCell >{row.commentaire}</TableCell>
              <TableCell >
              <IconButton color='secondary' onClick={e => {
                console.log(row.id)
                  remove(ref(database, '/adhesion/' + row.id)).then(data => {
                  }).catch(e=>console.log(e))
                }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
