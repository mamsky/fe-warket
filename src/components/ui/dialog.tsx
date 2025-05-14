type Props = {
  text: string;
  data: string;
};
const Dialog = ({ text, data }: Props) => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{data}!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              {text}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
