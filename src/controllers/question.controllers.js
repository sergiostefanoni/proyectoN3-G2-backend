const Question = require('./../models/Question');

const questionCtrl = {};

questionCtrl.createQuestionObject = async (req, res) => {
  try {
    const newQuestion = await new Question(req.body);
    await newQuestion.save();
    res.status(200).json({
      message: 'Encuesta cargada correctamente'
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al crear la encuesta'
    })
  }
}

module.exports = questionCtrl;