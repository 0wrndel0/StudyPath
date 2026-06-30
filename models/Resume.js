import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    objetivo: {
      type: String,
      default: ""
    },

    resumo: {
      type: String,
      default: ""
    },

    habilidades: {
      type: [String],
      default: []
    },

    formacao: {
      type: String,
      default: ""
    },

    experiencia: {
      type: String,
      default: ""
    },

    telefone: {
      type: String,
      default: ""
    },

    linkedin: {
      type: String,
      default: ""
    },

    github: {
      type: String,
      default: ""
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Resume", resumeSchema);