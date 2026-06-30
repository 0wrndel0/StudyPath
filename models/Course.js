import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },

    descricao: {
      type: String,
      required: true
    },

    plataforma: {
      type: String,
      default: ""
    },

    progresso: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },

    status: {
      type: String,
      enum: ["Não iniciado", "Em andamento", "Concluído"],
      default: "Não iniciado"
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Course", courseSchema);