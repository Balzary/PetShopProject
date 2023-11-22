import {Request, Response} from 'express'
import { Pets } from '../models/pet'

export const searchResult = (req:Request, res:Response) => {
    let list = Pets.getFromName(req.body.name as string)
    res.render('pages/pages',{
        banner:{
            title: 'Resultado da busca',
            background: 'allanimals.jpg'
        },
        list
    })
}