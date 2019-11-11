import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '80%',
        height: '80%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 200,
    },
});

const data = [
    { 'name': 'A', 'age': 23, 'mm2': 150.00, 'credit': 3000.00 },
    { 'name': 'B', 'age': 40, 'mm2': 200.00, 'credit': 8000.00 },
    { 'name': 'C', 'age': 18, 'mm2': 230.00, 'credit': 1000.00 },
    { 'name': 'D', 'age': 15, 'mm2': 80.00, 'credit': 500.00 },
    { 'name': 'E', 'age': 65, 'mm2': 400.00, 'credit': 15000.00 },
    { 'name': 'F', 'age': 54, 'mm2': 300.00, 'credit': 10000.00 },
    { 'name': 'G', 'age': 25, 'mm2': 200.00, 'credit': 3000.00 },
    { 'name': 'H', 'age': 19, 'mm2': 230.00, 'credit': 1500.00 },
    { 'name': 'I', 'age': 20, 'mm2': 231.00, 'credit': 3000.00 },
    { 'name': 'J', 'age': 45, 'mm2': 300.00, 'credit': 9300.00 },
    { 'name': 'K', 'age': 40, 'mm2': 285.00, 'credit': 8500.00 },
    { 'name': 'L', 'age': 30, 'mm2': 250.00, 'credit': 6000.00 },
    { 'name': 'M', 'age': 76, 'mm2': 300.00, 'credit': 8000.00 },
    { 'name': 'N', 'age': 20, 'mm2': 200.00, 'credit': 3000.00 },
    { 'name': 'O', 'age': 21, 'mm2': 450.00, 'credit': 5000.00 },
    { 'name': 'P', 'age': 29, 'mm2': 300.00, 'credit': 6500.00 },
    { 'name': 'Q', 'age': 51, 'mm2': 290.00, 'credit': 8500.00 },
    { 'name': 'R', 'age': 50, 'mm2': 300.00, 'credit': 9000.00 },
]

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Mm2</TableCell>
                        <TableCell align='right'><strong>Credit</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(d => (
                        <TableRow key={d.name}>
                            <TableCell component="th" scope="row">
                                {d.name}
                            </TableCell>
                            <TableCell >{d.age}</TableCell>
                            <TableCell >{d.mm2}</TableCell>
                            <TableCell align='right'><strong>{d.credit}</strong></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}