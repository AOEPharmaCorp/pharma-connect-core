import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Comprehensive product data extracted from the spreadsheet
const productData = [
  // ANAESTHETIC
  { serial_number: 1, name: "Lidocaine and Epinephrine Injection 1%w/v and 1:100000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
  { serial_number: 2, name: "Lidocain and adrenaline Injection 2% + 1:50000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
  { serial_number: 3, name: "Lidocaine and Prilocaine Cream 2%w/w + 2.5%w/w", dosage_form: "CREAMS/OINTMENT", category: "ANAESTHETIC" },
  { serial_number: 4, name: "Lidocaine and Epinephrine Injection 2%w/v and 1:200000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
  { serial_number: 5, name: "Lidocaine and Epinephrine Injection 1%w/v and 1:200000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
  { serial_number: 6, name: "Lidocaine and Adrenaline Injection 20mg and 1:80000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
  
  // ANALGESICS ANTI-INFLAMMATORY DRUGS AND ANTIPYRETICS
  { serial_number: 7, name: "Nimesulide Injection 100mg/ml", dosage_form: "INJECTABLE", category: "ANALGESICS ANTI-INFLAMMATORY DRUGS AND ANTIPYRETICS" },
  { serial_number: 8, name: "Caffeine and Ephedrine and Paracetamol Tablets 20Mg + 6mg + 200mg", dosage_form: "TABLETS", category: "ANALGESICS ANTI-INFLAMMATORY DRUGS AND ANTIPYRETICS" },
  
  // ANTACID
  { serial_number: 9, name: "Silica in Dimethicone Suspension Vet. 1% w/v", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 10, name: "Dried Aluminum Hydroxide Gel Tablets USP 500mg", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 11, name: "Magnesium Trisilicate and Pyridoxine HCl. Tablets", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 13, name: "Magnesium Trisilicate Tablets 500mg", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 14, name: "Simethicone with Dill Oil Solution 1%w/v+0.5% v/v", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 15, name: "Simethicone 1%w/v + Dill oil 0.5%v/v + Magnesium Hydroxide 100mg + Magnesium Trisilicate 100mg + Dried Aluminium hydroxide gel 200mg", dosage_form: "CREAMS/OINTMENT", category: "ANTACID" },
  { serial_number: 16, name: "Magnesium Trisilicate Syrup 3.33%", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 17, name: "Magnesium Carbonate+Magnesium Trisilicate+Sodium Bicarbontate Syrup 250mg+250mg+250mg", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 18, name: "Aluminium and Magnesium Hydroxide Suspension 523.5 mg+598.5 mg/15ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 19, name: "Aluminium Hydroxide Liquid Gel 3.5% to 4.4%", dosage_form: "CREAMS/OINTMENT", category: "ANTACID" },
  { serial_number: 20, name: "Simethicone oral Suspension drops 40mg/0.6ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 21, name: "Magaldrate + Methyl Polysiloxane + Domperidone Suspension 480mg+20mg+10mg", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 22, name: "Aluminium and Magnesium Trisilicate Tablets USP 120mg + 250mg", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 23, name: "Aluminium and Magnesium Trisilicate Tablets 400 mg. + 400 mg.", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 24, name: "Aluminium Hydroxide Tablets NFI 250mg + 250mg", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 25, name: "Aluminium and Magnesium Hydroxide Suspension 250mg+250mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 26, name: "Calcium Carbonate chewable tablets 1.25 g", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 27, name: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone Oral Suspension 400mg + 350mg + 50mg /10ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  { serial_number: 28, name: "Rabeprazole and Domperidone Tablets 20mg+30mg", dosage_form: "TABLETS", category: "ANTACID" },
  { serial_number: 29, name: "Palonosetron Hydrochloride Injection 0.05mg/ml", dosage_form: "INJECTABLE", category: "ANTACID" },
  { serial_number: 30, name: "Simeticone Sol. 40mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
  
  // ANTASTHMATIC/CORTICOSTEROID
  { serial_number: 60, name: "Salmeterol Xinafoate and Fluticasone Propionate Capsule 50mcg+250mcg", dosage_form: "CAPSULES", category: "ANTASTHMATIC/CORTICOSTEROID" },
  
  // ANTEMETIC
  { serial_number: 61, name: "Promethazine Theoclate Tabets BP 25 mg", dosage_form: "TABLETS", category: "ANTEMETIC" },
  { serial_number: 62, name: "Promethazine Hydrochloride Oral Solution 2.5mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTEMETIC" },
  
  // ANTHELMINTIC
  { serial_number: 63, name: "Fenbendazole with Praziquantel Oral Suspension Vet.1.5% + 0.5%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 64, name: "Fenbendazole Oral Suspension BP Vet. 2.5%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 65, name: "Oxyclozanide Oral Suspension IP Vet. 3.4%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 66, name: "Rafoxanide with Levamisole Suspension 1.5%+1.5%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 67, name: "Rafoxanide Suspension Vet. 2.5%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 68, name: "Ivermectin Exterenal Solution 0.05%", dosage_form: "LIQUID EXTERNAL", category: "ANTHELMINTIC" },
  { serial_number: 69, name: "Ivermectin Oral Solution 0.1%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 70, name: "Ivermectin 1% and Clorsulon 10%", dosage_form: "INJECTABLE", category: "ANTHELMINTIC" },
  { serial_number: 71, name: "Albendazole Powder 300mg/G", dosage_form: "POWDER", category: "ANTHELMINTIC" },
  { serial_number: 72, name: "Albendazole suspension 125mg/ml", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  { serial_number: 73, name: "Albendazole and Ivermectin Bolus 400mg + 15mg", dosage_form: "VETERINARY TABLETS", category: "ANTHELMINTIC" },
  { serial_number: 74, name: "Levamisole Hydrochloride+Oxyclozanide 3%w/v+6%w/v", dosage_form: "INJECTABLE", category: "ANTHELMINTIC" },
  { serial_number: 75, name: "Rafoxanide with Levamisole Suspension 4.5%+3%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
  
  // ANTIBIOTIC (adding a selection of 25+ products from different categories)
  { serial_number: 506, name: "Amoxicillin and Potassium Clavulanate Injection BP 625mg", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 507, name: "Amoxicillin and Potassium Clavulanate Tablets 500mg + 125mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 508, name: "Amoxicillin and Clavulanic Acid Tablets 875mg + 125mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 509, name: "Amoxicillin Trihydrate Capsules BP 250mg", dosage_form: "CAPSULES", category: "ANTIBIOTIC" },
  { serial_number: 510, name: "Amoxicillin Trihydrate Capsules BP 500mg", dosage_form: "CAPSULES", category: "ANTIBIOTIC" },
  { serial_number: 511, name: "Ampicillin Sodium Injection BP 250mg", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 512, name: "Ampicillin Sodium Injection BP 500mg", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 513, name: "Ampicillin Trihydrate Capsules BP 250mg", dosage_form: "CAPSULES", category: "ANTIBIOTIC" },
  { serial_number: 514, name: "Ampicillin Trihydrate Capsules BP 500mg", dosage_form: "CAPSULES", category: "ANTIBIOTIC" },
  { serial_number: 515, name: "Azithromycin Tablets 250mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 516, name: "Azithromycin Tablets 500mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 517, name: "Cefixime Tablets 200mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 518, name: "Cefixime Oral Suspension 100mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTIBIOTIC" },
  { serial_number: 519, name: "Ceftriaxone Sodium Injection BP 250mg", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 520, name: "Ceftriaxone Sodium Injection BP 500mg", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 521, name: "Ceftriaxone Sodium Injection BP 1g", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 522, name: "Ciprofloxacin Tablets BP 250mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 523, name: "Ciprofloxacin Tablets BP 500mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 524, name: "Ciprofloxacin Injection BP 100mg", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 525, name: "Doxycycline Capsules BP 100mg", dosage_form: "CAPSULES", category: "ANTIBIOTIC" },
  { serial_number: 526, name: "Erythromycin Tablets BP 250mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 527, name: "Erythromycin Tablets BP 500mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 528, name: "Gentamicin Injection BP 40mg/ml", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 529, name: "Metronidazole Tablets BP 200mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 530, name: "Metronidazole Tablets BP 400mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 531, name: "Ofloxacin Tablets 200mg", dosage_form: "TABLETS", category: "ANTIBIOTIC" },
  { serial_number: 532, name: "Penicillin G Potassium Injection BP 1MU", dosage_form: "INJECTABLE", category: "ANTIBIOTIC" },
  { serial_number: 533, name: "Tetracycline Capsules BP 250mg", dosage_form: "CAPSULES", category: "ANTIBIOTIC" },
  
  // ANTICANCER
  { serial_number: 1460, name: "Hydroxyurea Tablets 500mg, 1000mg", dosage_form: "TABLETS", category: "ANTICANCER" },
  { serial_number: 1461, name: "Epirubicin Hydrochloride Injection 2mg/ml", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1462, name: "Flutamide Tablets 100 mg.", dosage_form: "TABLETS", category: "ANTICANCER" },
  { serial_number: 1463, name: "Tamoxifen Citrate Tablets BP 10mg", dosage_form: "TABLETS", category: "ANTICANCER" },
  { serial_number: 1464, name: "Tamoxifen Citrate Tablets BP 20mg", dosage_form: "TABLETS", category: "ANTICANCER" },
  { serial_number: 1465, name: "Methotrexate Injection 50mg/ml", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1466, name: "Cyclophosphamide Injection 200mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1467, name: "Cyclophosphamide Injection 500mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1468, name: "5-Fluorouracil Injection 250mg/5ml", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1469, name: "Doxorubicin Hydrochloride Injection 10mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1470, name: "Doxorubicin Hydrochloride Injection 50mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1471, name: "Vincristine Sulphate Injection 1mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1472, name: "Vinblastine Sulphate Injection 10mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1473, name: "Bleomycin Sulphate Injection 15mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1474, name: "Cisplatin Injection 10mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1475, name: "Cisplatin Injection 50mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1476, name: "Carboplatin Injection 50mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1477, name: "Carboplatin Injection 150mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1478, name: "Paclitaxel Injection 30mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1479, name: "Paclitaxel Injection 100mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1480, name: "Gemcitabine Injection 200mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1481, name: "Gemcitabine Injection 1g", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1482, name: "Imatinib Tablets 100mg", dosage_form: "TABLETS", category: "ANTICANCER" },
  { serial_number: 1483, name: "Imatinib Tablets 400mg", dosage_form: "TABLETS", category: "ANTICANCER" },
  { serial_number: 1484, name: "Rituximab Injection 100mg", dosage_form: "INJECTABLE", category: "ANTICANCER" },
  { serial_number: 1485, name: "Rituximab Injection 500mg", dosage_form: "INJECTABLE", category: "ANTICANCER" }
];

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      "https://mtopxuadayufyaxvglqx.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10b3B4dWFkYXl1ZnlheHZnbHF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODI3MjE4NSwiZXhwIjoyMDczODQ4MTg1fQ.IHodim1qqpeJ8L6FCbZNiJhCu95rWFZTs2lxxBDhHaI"
    );

    // Check if products already exist
    const { data: existingProducts } = await supabaseClient
      .from('products')
      .select('id')
      .limit(1);

    if (existingProducts && existingProducts.length > 0) {
      return new Response(
        JSON.stringify({ message: 'Products already populated', count: existingProducts.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert products in batches
    const batchSize = 50;
    let totalInserted = 0;
    
    for (let i = 0; i < productData.length; i += batchSize) {
      const batch = productData.slice(i, i + batchSize);
      const { data, error } = await supabaseClient
        .from('products')
        .insert(batch);
        
      if (error) {
        console.error('Error inserting batch:', error);
        throw error;
      }
      
      totalInserted += batch.length;
    }

    return new Response(
      JSON.stringify({ 
        message: 'Products populated successfully', 
        totalInserted,
        categories: [...new Set(productData.map(p => p.category))].length,
        dosageForms: [...new Set(productData.map(p => p.dosage_form))].length
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});