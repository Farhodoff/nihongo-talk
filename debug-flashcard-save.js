// Debug script to test flashcard saving
// Run this in browser console (F12)

// Test 1: Check if user is authenticated
const { data: userData } = await supabase.auth.getUser();
console.log('1. User:', userData.user?.email);

// Test 2: Check if subjects exist
const { data: subjects } = await supabase.from('subjects').select('*').eq('user_id', userData.user.id);
console.log('2. Subjects:', subjects);

// Test 3: Try to save a test flashcard
const testCard = {
    user_id: userData.user.id,
    subject_id: subjects[0].id,  // Use first subject
    front: 'Test Front',
    back: 'Test Back',
    next_review_date: new Date().toISOString(),
    ease_factor: 2.5,
    interval: 0,
    repetitions: 0
};

console.log('3. Attempting to save:', testCard);

const { data: savedCard, error } = await supabase
    .from('flashcards')
    .insert(testCard)
    .select()
    .single();

if (error) {
    console.error('4. ERROR:', error);
} else {
    console.log('4. SUCCESS:', savedCard);
}
