import React from 'react';  
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TableComponent() {
    const dispatch = useDispatch();
    let navigateState = useNavigate();
    let navigateTo = "/edit-details-page";

    function createData(slno, firstName, lastName, img) {
        return { slno, firstName, lastName, img };
    }

    const rows = [
    createData('1', 'FirstName1', 'LastName1', <img src="../../assets/icons/edit.png" alt="" height="20" width="20" />),
    createData('2', 'FirstName2', 'LastName2', <img src="../../assets/icons/edit.png" alt="" height="20" width="20" />),
    createData('3', 'FirstName3', 'LastName3', <img src="../../assets/icons/edit.png" alt="" height="20" width="20" />),
    createData('4', 'FirstName4', 'LastName4', <img src="../../assets/icons/edit.png" alt="" height="20" width="20" />),
    ];
    const editRowElement = (clickedId) => {
        let selected = rows.filter(item => item.slno == clickedId);
        dispatch({
            type: 'TO_EDIT_LIST',
            payload: selected
        });
        navigateState(navigateTo);
    }
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell align="right">First Name</StyledTableCell>
                        <StyledTableCell align="right">Last Name</StyledTableCell>
                        <StyledTableCell align="right">Edit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.slno}>
                            <StyledTableCell component="th" scope="row">
                                {row.slno}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                            <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                            <StyledTableCell align="right" onClick={() => {editRowElement(row.slno)}}>{row.img}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent;
