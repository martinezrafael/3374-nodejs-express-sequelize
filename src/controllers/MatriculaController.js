const Controller = require("./Controller.js");
const MatriculaService = require("../services/MatriculaServices.js");

const matriculaServices = new MatriculaService();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }
}

module.exports = MatriculaController;
