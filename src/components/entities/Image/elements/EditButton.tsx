import EditImageButton from "../../../ui/buttons/EditImageButton";

const EditButton = ({
  setActive,
}: {
  setActive: (value: React.SetStateAction<boolean>) => void;
}) => {
  return (
    <EditImageButton
      onClick={() => {
        setActive((prev) => !prev);
      }}
    />
  );
};

export default EditButton;
