import Papa from 'papaparse';
import { contractsCSV, incidentsCSV, softwareCSV, assetsData } from './raw-datasets';

export interface Contract {
  Publisher: string;
  SoftwareTitle: string;
  Category: string;
  Consumption: number;
  Utilisation: number;
  ContractStart: string;
  ContractEnd: string;
  ACV: number;
  TCV: number;
  ContractOwner: string;
  KeyStakeholders: string;
}

export interface Incident {
  TicketID: string;
  Category: string;
  Priority: string;
  Department: string;
  AssignedTeam: string;
  CreatedDate: string;
  ResolvedDate: string;
  SLAHours: number;
  ActualHours: number | null;
  Status: string;
  RepeatIssue: string;
  RootCause: string;
}

export interface Software {
  SoftwareName: string;
  Vendor: string;
  Department: string;
  Owner: string;
  LastUsedDate: string;
  AnnualCost: number;
  LicensedCount: number;
  InstalledCount: number;
  ContractRenewal: string;
}

export const getContracts = (): Contract[] => {
  const result = Papa.parse(contractsCSV, { header: true, skipEmptyLines: true });
  return result.data.map((row: any) => ({
    Publisher: row.Publisher,
    SoftwareTitle: row['Software Title'],
    Category: row.Category,
    Consumption: parseFloat(row['Consumption %']),
    Utilisation: parseFloat(row['Utilisation %']),
    ContractStart: row['Contract Start'],
    ContractEnd: row['Contract End'],
    ACV: parseFloat(row['ACV (USD)']),
    TCV: parseFloat(row['TCV (USD)']),
    ContractOwner: row['Contract Owner'],
    KeyStakeholders: row['Key Stakeholders'],
  }));
};

export const getIncidents = (): Incident[] => {
  const result = Papa.parse(incidentsCSV, { header: true, skipEmptyLines: true });
  return result.data.map((row: any) => ({
    TicketID: row['Ticket ID'],
    Category: row.Category,
    Priority: row.Priority,
    Department: row.Department,
    AssignedTeam: row['Assigned Team'],
    CreatedDate: row['Created Date'],
    ResolvedDate: row['Resolved Date'],
    SLAHours: parseFloat(row['SLA Hours']),
    ActualHours: row['Actual Hours'] ? parseFloat(row['Actual Hours']) : null,
    Status: row.Status,
    RepeatIssue: row['Repeat Issue'],
    RootCause: row['Root Cause'],
  }));
};

export const getSoftware = (): Software[] => {
  const result = Papa.parse(softwareCSV, { header: true, skipEmptyLines: true });
  return result.data.map((row: any) => ({
    SoftwareName: row['Software Name'],
    Vendor: row.Vendor,
    Department: row.Department,
    Owner: row.Owner,
    LastUsedDate: row['Last Used Date'],
    AnnualCost: parseFloat(row['Annual Cost']),
    LicensedCount: parseFloat(row['Licensed Count']),
    InstalledCount: parseFloat(row['Installed Count']),
    ContractRenewal: row['Contract Renewal'],
  }));
};

export const getAssets = () => assetsData;
