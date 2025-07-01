import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import './style.css'


export default function Empresa (){


    return (
        <Box className='principal'>
            <Box 
             position={'relative'}
             sx={{ backgroundColor: '#FAFAFA' }}
             gap={2}
             padding={'0 10px '}
             margin-top={'16px'}
             margin-left={'40px'}
            >

            <Box className='boxGeral'>
                <Box className='boxFiltro'>
                    <Box className='conteudo'>
                        <Typography>Filtros</Typography>
                        <Box
                         sx={(theme) => ({
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                            },
                        })}
                        >
                            <Button
                            startIcon={<></>}
                            >
                                Limpar Filtros
                            </Button>
                        </Box>
                    </Box>

                    <Box className="BoxConsulta">
                        <Box className="boxSelects">
                            <Box>
                                <FormLabel>Nome da Empresa</FormLabel>
                                <TextField
                                type="text"
                                />
                            </Box>

                            <Box>
                                <FormLabel>CNPJ</FormLabel>
                                <TextField 
                                type="text"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
    );
}