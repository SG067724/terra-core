import React from 'react';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import Card from 'terra-card';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import Button from 'terra-button';

const ActionHeaderNonUniqueIcon = () => {
  const Medications = 'Patient Medications here..';
  const Results = 'Patient Results here..';
  const MedIcon = <IconPrinter a11yLabel="Print Patient Medications" />;
  const ResIcon = <IconPrinter a11yLabel="Print Patient Result" />;

  return (
    <div>
      <Card>
        <Card.Body>
          <ContentContainer
            header={(
              <ActionHeader text="Patient Medications" level={2}>
                <Button icon={MedIcon} text="Print" />
              </ActionHeader>
)}
          >
            <p>{Medications}</p>
          </ContentContainer>
          <ContentContainer
            header={(
              <ActionHeader text="Patient Results" level={2}>
                <Button icon={ResIcon} text="Print" />
              </ActionHeader>
)}
          >
            <p>{Results}</p>
          </ContentContainer>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ActionHeaderNonUniqueIcon;
