import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFaqs } from "../features/faq/faqSlice";
export default function Faq() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.faq.isLoading);
  const faqs = useSelector((state) => state.faq.faqs);

  useEffect(() => {
    dispatch(getFaqs());
  }, [dispatch]);
  return (
    <div className="row">
      <div className="col-md-6 mt-5 m-auto mb-5">
        <div className="">
          <h3 className="contactus-title mb-4">FAQs</h3>
        </div>

        <div className="accordion" id="faqsAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item my-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-controls="collapseOne"
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqsAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
