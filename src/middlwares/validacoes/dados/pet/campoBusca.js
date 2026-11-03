export function validarCampo(campo) {
    const camposValidos = [
      "numero_identificacao",
      "nome",
      "idade",
      "especie",
      "peso",
      "raca",
      "sexo",
      "descricao",
      "imagem"
    ];
    if (!camposValidos.map(c => c.toLowerCase()).includes(campo.toLowerCase())) {
        return `Campo inválido. Os campos válidos são: ${camposValidos.join(', ')}`;
    }
    return null;
}