const { default: mongoose } = require('mongoose')

const InversionModel = require('../schemas/inversion.model')

exports.get = async () => {
return await InversionModel.find({}).sort({ _id: -1 })
}

exports.search = async (text) => {
    const regex = new RegExp(text, 'i')
    return InversionModel.find({ nombre: regex })
}

exports.add = async (inversion) => {
    const createdInversion = new InversionModel(inversion)
    const newInversion = await createdInversion.save()
    return newInversion
}

exports.edit = async (id_inversion, inversion) => {
    const inversionBD = await InversionModel.findById(id_budgetary)
    const newInversion = await InversionModel.findByIdAndUpdate(id_inversion, inversion, { new: true })
    return newInversion
}


exports.delete = async (id_inversion) => {
    const inversionBD = await InversionModel.findById(id_inversion);
    if (!inversionBD) {
        throw { status: 400, message: 'El nivel no existe' };
    }
    return await InversionModel.findByIdAndDelete(id_inversion);
}


exports.searchInversionesWithNombre = async (text) => {
    const regex = new RegExp(text, 'i')
    return await InversionModel.aggregate([
        {
            $match: {
                nombreInversion: regex
            }
        },
        { $limit: 5}
    ])
}