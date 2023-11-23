const { Schema, model } = require('mongoose')

const InversionModel = Schema({

    nombreInversion:{
        type: String,
        required: true,
        uppercase: true
    },

    inicialFijoPesimista: {
        type: Number,
        required: true
    },
    inicialFijoProbable: {
        type: Number,
        required: true
    },
    inicialFijoOptimista: {
        type: Number,
        required: true
    },
    inicialCirculantePesimista: {
        type: Number,
        required: true
    },
    inicialCirculanteProbable: {
        type: Number,
        required: true
    },
    inicialCirculanteOptimista: {
        type: Number,
        required: true
    },
    flujoAntesImpuestosPesimista: {
        type: Number,
        required: true
    }, 
    flujoAntesImpuestosProbable: {
        type: Number,
        required: true
    },

    flujoAntesImpuestosOptimista: {
        type: Number,
        required: true
    },
    tasaInflacionPesimista: {
        type: Number,
        required: true
    }, 
    tasaInflacionProbable: {
        type: Number,
        required: true
    },
    tasaInflacionOptimista: {
        type: Number,
        required: true
    }                                                                   
})

InversionModel.method('toJSON', function () {
    const { __v, ...object } = this.toObject()
    return object
})

module.exports = model('inversiones', InversionModel)