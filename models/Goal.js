import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },

    descricao: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Pendente", "Concluído"],
      default: "Pendente"
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

export default mongoose.model("Goal", goalSchema);