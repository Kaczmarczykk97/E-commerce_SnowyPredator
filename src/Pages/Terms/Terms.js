import termsData from "./TermsData";
import policyData from "./PolicyData";

import classes from "./Terms.module.css";

function Terms() {
  return (
    <div className={classes["terms-wrapper"]}>
      <h2>Terms & Conditions for SnowyPredator Online Store</h2>
      {termsData.map((t, i) => {
        return (
          <div key={i} className={classes["paragraf-container"]}>
            <h3>{t.heading}</h3>
            <p>{t.paragraph_1}</p>
            {t.paragraph_2 && <p>{t.paragraph_2}</p>}
          </div>
        );
      })}

      <h2>Privacy Policy for SnowyPredator Online Store</h2>
      {policyData.map((t, i) => {
        return (
          <div key={i} className={classes["paragraf-container"]}>
            <h3>{t.heading}</h3>
            <p>{t.paragraph_1}</p>
            {t.paragraph_2 && <p>{t.paragraph_2}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Terms;
