import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./ProgressBars.css";

function ProgressBars() {
  const { t } = useTranslation();

  const [progr, setProgr] = useState(0);

  const now1 = 35.1;
  const now2 = 19.9;
  const now3 = 42.7;

  setTimeout(() => {
    if (progr === 100) setProgr(0);
    else setProgr(progr + 1);
  }, 500);

  return (
    <div className="progr">
      <div className="progress-bars">
        <ProgressBar striped variant="success" now={51} />
        <ProgressBar striped variant="warning" now={32} />
        <ProgressBar striped variant="danger" now={93.2} />
        <ProgressBar striped variant="info" now={progr} label={`${progr}%`} />
        <ProgressBar
          striped
          variant="primary"
          label={t("progress-complete")}
          now={100}
        />

        <ProgressBar>
          <ProgressBar
            variant="warning"
            now={now2}
            label={`${now2}%`}
            key={2}
          />
          <ProgressBar
            variant="success"
            now={now1}
            label={`${now1}%`}
            key={1}
          />
          <ProgressBar variant="danger" now={now3} label={`${now3}%`} key={3} />
        </ProgressBar>
      </div>
    </div>
  );
}

export default ProgressBars;
