const extractFormData = (form_jsx) => {
    // Me devuelve un obj con el que puedo manipular mi formulario
    const form_data = new FormData(form_jsx)
    // Devuelve una lista de llaves ['nombre', 'contrasenia'] y las convierto a array para poder trabajarla
    const form_keys = Array.from(form_data.keys())
    const form_values = {}
    for (let key of  form_keys){
      form_values[key] = form_data.get(key)
    }
    return form_values
}

export default extractFormData