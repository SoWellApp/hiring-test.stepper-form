import GreatHeaderRow from './Summary/GreatHeaderRow.vue';
import SummaryRow from './Summary/SummaryRow.vue';
import SummaryPersonalInfo from './Summary/SummaryPersonalInfo.vue';
import SummaryProfessionalInfo from './Summary/SummaryProfessionalInfo.vue';
import SummaryDegrees from './Summary/SummaryDegrees.vue';
import SummaryPublications from './Summary/SummaryPublications.vue';

export interface Row {
  label: string;
  value: string;
  icon: 'check' | 'error';
}

export {
  GreatHeaderRow,
  SummaryRow,
  SummaryPersonalInfo,
  SummaryProfessionalInfo,
  SummaryDegrees,
  SummaryPublications,
};
