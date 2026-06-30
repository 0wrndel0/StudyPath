import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },

    descricao: {
      type: String,
      required: true
    },

    tecnologias: {
      type: [String],
      default: []
    },

    github: {
      type: String,
      default: ""
    },

    deploy: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["Em desenvolvimento", "Concluído"],
      default: "Em desenvolvimento"
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

export default mongoose.model("Project", projectSchema);