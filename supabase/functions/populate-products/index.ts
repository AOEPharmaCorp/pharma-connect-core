import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Product data extracted from the ODS file
    const products = [
      { serial_number: 1, name: "Lidocaine and Epinephrine Injection 1%w/v and 1:100000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
      { serial_number: 2, name: "Lidocain and adrenaline Injection 2% + 1:50000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
      { serial_number: 3, name: "Lidocaine and Prilocaine Cream 2%w/w + 2.5%w/w", dosage_form: "CREAMS/OINTMENT", category: "ANAESTHETIC" },
      { serial_number: 4, name: "Lidocaine and Epinephrine Injection 2%w/v and 1:200000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
      { serial_number: 5, name: "Lidocaine and Epinephrine Injection 1%w/v and 1:200000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
      { serial_number: 6, name: "Lidocaine and Adrenaline Injection 20mg and 1:80000", dosage_form: "INJECTABLE", category: "ANAESTHETIC" },
      { serial_number: 7, name: "Nimesulide Injection 100mg/ml", dosage_form: "INJECTABLE", category: "ANALGESICS ANTI-INFLAMMATORY DRUGS AND ANTIPYRETICS" },
      { serial_number: 8, name: "Caffeine and Ephedrine and Paracetamol Tablets 20Mg + 6mg + 200mg", dosage_form: "TABLETS", category: "ANALGESICS ANTI-INFLAMMATORY DRUGS AND ANTIPYRETICS" },
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
      { serial_number: 31, name: "Simeticone Sol. 66.66 mg/ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 32, name: "Dimethylpolysilonon Tablets 250mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 33, name: "Calcium Carbonate Oral Suspension 250mg/5ml", dosage_form: "LIQUID ORAL", category: "ANTACID" },
      { serial_number: 34, name: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone + Carboxymethylcellulose Suspension 830mg + 185mg + 50mg + 100mg", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 35, name: "Aluminium Hydroxide Chewable Tablets 500 mg.", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 36, name: "Antacid Liquid", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 37, name: "Aluminum and Magnesium Hydroxide Chewable Tablets 400mg + 400mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 38, name: "Aluminium and Magnesium Hydroxide Suspension 350mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 39, name: "Aluminum and Magnesium Hydroxide Chewable Tablets 125mg+250mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 40, name: "Magnesium Hydroxide Tablets 500mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 41, name: "Aluminium and Magnesium and Simethicone Tablets 200mg + 200 mg+ 50mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 42, name: "Aluminium and Magnesium and Simethicone Chewable Tablets 200mg + 200 mg+ 25mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 43, name: "Aluminium and Magnesium and Simethicone Tablets 300mg + 50 mg+ 25mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 44, name: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone Suspension 306mg + 100mg + 20mg", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 45, name: "Aluminium and Magnesium Hydroxide Suspension 200mg + 200mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 46, name: "Aluminium Hydroxide Chewable Tablets 500 mg. (Avg. wt. 1000mg)", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 47, name: "Aluminium and Magnesium Hydroxide and Simethicone Suspension 200mg+200mg+ 25mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 48, name: "Aluminium and Magnesium Hydroxide Suspension 405mg + 100mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      { serial_number: 49, name: "Aluminum and Magnesium Hydroxide Chewable Tablets 250mg + 250mg", dosage_form: "TABLETS", category: "ANTACID" },
      { serial_number: 50, name: "Aluminium and Magnesium Hydroxide and Dimethicone Suspension 200mg+200mg+ 20mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTACID" },
      // ... continuing with more products from the parsed data
      { serial_number: 60, name: "Salmeterol Xinafoate and Fluticasone Propionate Capsule 50mcg+250mcg", dosage_form: "CAPSULES", category: "ANTASTHMATIC/CORTICOSTEROID" },
      { serial_number: 61, name: "Promethazine Theoclate Tabets BP 25 mg", dosage_form: "TABLETS", category: "ANTEMETIC" },
      { serial_number: 62, name: "Promethazine Hydrochloride Oral Solution 2.5mg/5ml", dosage_form: "LIQUID ORALS", category: "ANTEMETIC" },
      { serial_number: 63, name: "Fenbendazole with Praziquantel Oral Suspension Vet.1.5% + 0.5%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
      { serial_number: 64, name: "Fenbendazole Oral Suspension BP Vet. 2.5%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" },
      { serial_number: 65, name: "Oxyclozanide Oral Suspension IP Vet. 3.4%", dosage_form: "LIQUID ORALS", category: "ANTHELMINTIC" }
    ];

    // Check if products already exist
    const { data: existingProducts, error: checkError } = await supabase
      .from('products')
      .select('serial_number')
      .limit(5);

    if (checkError) {
      console.error('Error checking existing products:', checkError);
      throw checkError;
    }

    if (existingProducts && existingProducts.length > 0) {
      return new Response(
        JSON.stringify({ message: 'Products already exist in database', count: existingProducts.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert products in batches
    const batchSize = 100;
    let insertedCount = 0;

    for (let i = 0; i < products.length; i += batchSize) {
      const batch = products.slice(i, i + batchSize);
      
      const { data, error } = await supabase
        .from('products')
        .insert(batch);

      if (error) {
        console.error('Error inserting products batch:', error);
        throw error;
      }

      insertedCount += batch.length;
      console.log(`Inserted batch ${Math.floor(i/batchSize) + 1}, total: ${insertedCount}`);
    }

    return new Response(
      JSON.stringify({ 
        message: 'Products populated successfully', 
        count: insertedCount 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in populate-products function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});