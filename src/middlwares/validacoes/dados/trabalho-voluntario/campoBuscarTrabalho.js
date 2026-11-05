export function validarCampoTrabalho(campo) {
    if (!campo) {
        return "O parametro campo precisa existir"
    }
      const camposValidos = [
        "id",
        "titulo",
        "local",
        "jornada",
        "status"
      ];
      if (
        !camposValidos.map((c) => c.toLowerCase()).includes(campo.toLowerCase())
      ) {
        return `Campo inválido. Os campos válidos são: ${camposValidos.join(", ")}`;
      }
      return null;
}