// Test Supabase connection and flashcard insertion
import { supabase } from './src/lib/supabase';

async function testFlashcardInsert() {
    console.log('=== Testing Supabase Flashcard Insert ===');

    // 1. Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError) {
        console.error('❌ Auth Error:', authError);
        return;
    }
    if (!user) {
        console.error('❌ No user logged in');
        return;
    }
    console.log('✅ User authenticated:', user.id, user.email);

    // 2. Check subjects
    const { data: subjects, error: subjectError } = await supabase
        .from('subjects')
        .select('*')
        .eq('user_id', user.id)
        .limit(1);

    if (subjectError) {
        console.error('❌ Subject Error:', subjectError);
        return;
    }
    if (!subjects || subjects.length === 0) {
        console.error('❌ No subjects found. Create a subject first!');
        return;
    }
    console.log('✅ Subject found:', subjects[0].id, subjects[0].name);

    // 3. Test flashcard insert
    const testCard = {
        user_id: user.id,
        subject_id: subjects[0].id,
        front: 'Test Question',
        back: 'Test Answer',
        next_review_date: new Date().toISOString(),
        ease_factor: 2.5,
        interval: 0,
        repetitions: 0
    };

    console.log('Attempting to insert:', testCard);

    const { data, error } = await supabase
        .from('flashcards')
        .insert(testCard)
        .select()
        .single();

    if (error) {
        console.error('❌ Insert Error:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        return;
    }

    console.log('✅ Flashcard inserted successfully:', data);
}

testFlashcardInsert();
