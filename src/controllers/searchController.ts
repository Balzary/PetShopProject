import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pets } from '../models/pet'

export const searchResult = (req:Request, res:Response) => {
    let query: string = req.query.q as string
    let list = Pets.getFromName(query)
    res.render('pages/pages',{
        // menu: createMenuObject('all'),
        // banner:{
        //     title: 'Resultado da busca',
        //     background: 'allanimals.jpg'
        // },
        list
    })
}