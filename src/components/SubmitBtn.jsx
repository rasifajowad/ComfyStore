import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();

  console.log(navigation);

  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-primary btn-block"
    >
      {isSubmitting ? (
        <span className="loading loading-spinner">Submitting...</span>
      ) : (
        text.toUpperCase() || "SUBMIT"
      )}
    </button>
  );
};

export default SubmitBtn;
