// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const main = (
  projectId = process.env.GOOGLE_CLOUD_PROJECT,
  cloudRegion = 'us-central1',
  datasetId,
  dicomStoreId
) => {
  // [START healthcare_dicom_store_get_iam_policy]
  const {google} = require('googleapis');
  const healthcare = google.healthcare('v1');

  const getDicomStoreIamPolicy = async () => {
    const auth = await google.auth.getClient({
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    google.options({auth});

    // TODO(developer): uncomment these lines before running the sample
    // const cloudRegion = 'us-central1';
    // const projectId = 'adjective-noun-123';
    // const datasetId = 'my-dataset';
    // const dicomStoreId = 'my-dicom-store';
    const resource_ = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}/dicomStores/${dicomStoreId}`;
    const request = {resource_};

    const dicomStore =
      await healthcare.projects.locations.datasets.dicomStores.getIamPolicy(
        request
      );
    console.log(
      'Got DICOM store IAM policy:',
      JSON.stringify(dicomStore.data, null, 2)
    );
  };

  getDicomStoreIamPolicy();
  // [END healthcare_dicom_store_get_iam_policy]
};

// node getDicomStoreIamPolicy.js <projectId> <cloudRegion> <datasetId> <dicomStoreId>
main(...process.argv.slice(2));
