const router = require('express').Router()
const { request, response, text } = require('express');

const InversionService = require('../services/inversion.service')

router.get('', async (req = request, res = response) => {
    try {
        const inversiones = await InversionService.get()
        //console.log(budgetarys)
        return res.status(200).json({
            ok: true,   
            inversiones
        })
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})
router.get('/:text', async (req = request, res = response) => {
    try {
        const inversiones = await InversionService.search(req.params.text)
        return res.status(200).json({
            ok: true,
            inversiones
        })
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})

router.get('/conNombre/:text', async (req = request, res = response) => {
    try {
        const inversiones = await InversionService.searchInversionesWithNombre(req.params.text)
        return res.status(200).json(inversiones)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }   
})

router.put('/:id', async (req = request, res = response) => {
    try {
        const inversion = await InversionService.edit(req.params.id, req.body)
        return res.status(200).json(inversion)
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'  
        })
    }
})


router.post('', async (req = request, res = response) => {
    try {
        const inversiones = await InversionService.add(req.body)
        return res.status(200).json(inversiones)
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})

router.delete('/:id', async (req = request, res = response) => {
    try {
        const data = await InversionService.delete(req.params.id)
        return res.status(200).json(data)
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})


module.exports = router